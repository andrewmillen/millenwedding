import paper from 'paper'
import SimplexNoise from 'simplex-noise'
import { useEffect } from 'react'

export default function customCursor() {
    function initMagneticCursor() {
        // --------------------------------
        // Custom Cursor
        // --------------------------------

        // set the starting position of the cursor outside of the screen
        let clientX = -100
        let clientY = -100
        const innerCursor = document.querySelector('.cursor--small')

        const initCursor = () => {
            // add listener to track the current mouse position
            document.addEventListener('mousemove', e => {
                clientX = e.clientX
                clientY = e.clientY
            })

            // transform the innerCursor to the current mouse position
            // use requestAnimationFrame() for smooth performance
            const render = () => {
                innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`

                requestAnimationFrame(render)
            }
            requestAnimationFrame(render)
        }

        initCursor()

        // --------------------------------
        // Hovers
        // --------------------------------

        const initHovers = () => {
            // find the center of the link element and set stuckX and stuckY
            // these are needed to set the position of the noisy circle
            const handleMouseEnter = e => {
                const navItem = e.currentTarget
                const navItemBox = navItem.getBoundingClientRect()
                stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
                stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
                isStuck = true
            }

            // reset isStuck on mouseLeave
            const handleMouseLeave = () => {
                isStuck = false
            }

            // add event listeners to RSVP button
            const rsvpButton = document.querySelector('.rsvp')
            rsvpButton.addEventListener('mouseenter', handleMouseEnter)
            rsvpButton.addEventListener('mouseleave', handleMouseLeave)
        }

        initHovers()

        // --------------------------------
        // Magnetic and Noisy
        // --------------------------------

        let lastX = 0
        let lastY = 0
        let isStuck = false
        let isExpanded = false
        let showCursor = false
        let group, stuckX, stuckY, fillOuterCursor
        let polygon = null

        const initCanvas = () => {
            const canvas = document.querySelector('.cursor--canvas')
            const shapeBounds = {
                width: 112,
                height: 112,
            }
            paper.setup(canvas)
            const strokeColor = '#E2A361'
            const strokeWidth = 1
            const segments = 8 // essentially round
            const radius = 25

            // the base shape for the noisy circle
            polygon = new paper.Path.RegularPolygon(
                new paper.Point(0, 0),
                segments,
                radius
            )
            polygon.strokeColor = strokeColor
            polygon.strokeWidth = strokeWidth
            polygon.smooth()
            group = new paper.Group([polygon])
            group.applyMatrix = false

            const noiseObjects = polygon.segments.map(() => new SimplexNoise())
            let bigCoordinates = []

            // function for linear interpolation of values
            const lerp = (a, b, n) => {
                return (1 - n) * a + n * b
            }

            // function to map a value from one range to another range
            const map = (value, in_min, in_max, out_min, out_max) => {
                return (
                    ((value - in_min) * (out_max - out_min)) /
                        (in_max - in_min) +
                    out_min
                )
            }

            // the draw loop of Paper.js
            // (60fps with requestAnimationFrame under the hood)
            paper.view.onFrame = event => {
                // using linear interpolation, the circle will move 0.2 (20%)
                // of the distance between its current position and the mouse
                // coordinates per Frame
                if (isExpanded) {
                    lastX = lerp(lastX, clientX, 0.15)
                    lastY = lerp(lastY, clientY, 0.15)
                    group.position = new paper.Point(lastX, lastY)
                    polygon.scale(1)
                } else {
                    if (!isStuck) {
                        // move circle around normally
                        lastX = lerp(lastX, clientX, 0.15)
                        lastY = lerp(lastY, clientY, 0.15)
                        group.position = new paper.Point(lastX, lastY)
                    } else if (isStuck) {
                        // fixed position on a nav item
                        lastX = lerp(lastX, stuckX, 0.15)
                        lastY = lerp(lastY, stuckY, 0.15)
                        group.position = new paper.Point(lastX, lastY)
                    }

                    if (isStuck && polygon.bounds.width < shapeBounds.width) {
                        // scale up the shape
                        polygon.scale(2.4)
                    } else if (!isStuck && polygon.bounds.width > 50) {
                        // scale down the shape
                        const scaleDown = 0.8
                        polygon.scale(scaleDown)
                    }
                }

                polygon.smooth()
            }
        }

        initCanvas()
    }

    useEffect(() => {
        initMagneticCursor()
    }, [])

    return (
        <>
            <div className="cursor cursor--small"></div>
            <canvas className="cursor cursor--canvas" resize="true"></canvas>
        </>
    )
}
