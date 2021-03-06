import { Component } from 'react'
import _ from 'lodash'
const { mapValues, toNumber } = _

class RSVPButton extends Component {
    state = {
        window: typeof window !== 'undefined' && {
            width: window?.innerWidth,
            height: window?.innerHeight,
        },
        mouse: { x: 0, y: 0 },
        isMagnetic: false,
        ease: { x: 0, y: 0, scale: 1 },
        bounds: {},
    }

    componentDidMount() {
        this.addEvents()
        this.resize()
        this.run()
    }

    addEvents() {
        window.addEventListener('resize', this.resize)
        document.addEventListener('mousemove', this.mouseMove)
    }

    resize = () => {
        const btn = this.btn.getBoundingClientRect()
        const state = {
            window: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            bounds: {
                width: btn.width,
                height: btn.height,
                top: btn.top,
                left: btn.left,
            },
        }
        this.setState({ ...state })
    }

    mouseMove = ({ pageX: x, pageY: y }) => {
        this.setState({
            mouse: { x, y },
            isMagnetic: this.isMagnetic(x, y),
        })
    }

    isMagnetic(x, y) {
        const { bounds } = this.state

        const centerX = bounds.left + bounds.width / 2
        const centerY = bounds.top + bounds.height / 2

        const a = Math.abs(centerX - x)
        const b = Math.abs(centerY - y)
        const c = Math.sqrt(a * a + b * b)

        return c < bounds.width / 2 + this.getThreshold()
    }

    getThreshold() {
        const { isMagnetic } = this.state
        const { threshold, ratio } = this.props

        return isMagnetic ? threshold * ratio : threshold
    }

    run = () => {
        const ease = { ...this.state.ease }
        const transform = this.getTransforms()

        Object.keys(transform).forEach(key =>
            this.getEase(key, transform, ease)
        )

        this.setState({
            ease: this.fixValues(ease),
        })

        requestAnimationFrame(this.run)
    }

    getTransforms() {
        const { isMagnetic, mouse, window, bounds } = this.state
        const { max, scale } = this.props

        return {
            x: isMagnetic
                ? ((mouse.x - (bounds.left + bounds.width / 2)) /
                      bounds.width) *
                  max
                : 0,
            y: isMagnetic
                ? ((mouse.y - (bounds.top + bounds.height / 2)) /
                      bounds.height) *
                  max
                : 0,
            scale: isMagnetic ? scale : 1,
        }
    }

    getEase(key, target, value) {
        return (value[key] += (target[key] - value[key]) * this.props.ease)
    }

    fixValues(obj) {
        return mapValues(obj, x => toNumber(x.toFixed(2)))
    }

    render() {
        const { ratio } = this.props
        const isHoverClass = this.state.isMagnetic ? 'is-hover' : ''
        const { x, y, scale } = this.state.ease
        const style = {
            btn: {
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
            },
            label: {
                transform: `translate3d(${-x / ratio}px, ${
                    -y / ratio
                }px, 0) scale(${1 / scale})`,
            },
        }

        return (
            <a
                style={style.btn}
                className={`rounded-full relative w-56 h-56 flex justify-center items-center ${isHoverClass}`}
                ref={btn => (this.btn = btn)}
                href="https://weddings.papier.com/regina-andrew/rsvp-7203"
                target="_blank"
            >
                <span
                    className="font-bold text-white font-serif ml-4 text-xl text-center tracking-widest flex justify-center items-center"
                    style={style.label}
                >
                    {this.props.label}
                </span>
                <span className="inline-block border-2 border-marigold border-solid rounded-full w-full h-full absolute top-0 left-0"></span>
            </a>
        )
    }
}

export default RSVPButton
