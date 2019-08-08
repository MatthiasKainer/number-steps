const step = ({ snap = false, size }) => ({
    up : (value) => {
        if (!snap) return value + size;
        if (value >= 0) return (value - value % size) + size;
        if (value % size === 0) return value + size;
        return value >= 0 - size
            ? (value - value % size)
            : (value - (value + size) % size);
    },
    down : (value) => {
        if (!snap) return value - size;
        if (value > 0) return (value % size === 0) ? value - size : (value - value % size);
        if (value === 0) return 0 - size;
        if (value % size === 0) return value + size;
        return value - (value % size) - size;
    }
})

module.exports = {step};