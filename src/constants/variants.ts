

const container = {  // PARENT
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        // color: 'red',
        transition: {
            duration: 0.50,
            delayChildren: 0.20,
            repeat: 1,
            // repeatType: 'reverse',
            staggerChildren: 0.7,
            staggerDirection: 1,
            when: 'beforeChildren'

        }
    }
}

const onItem = {   // child
    hidden: {opacity: 0},
    show: {opacity: 1}
};

// <motion.ul animate='show' variants={container}
// initial='hidden'>
//     <motion.h2>Uordered List</motion.h2>
//     <motion.li variants={onItem}> Hey </motion.li>
//     <motion.li variants={onItem} />
//     <motion.li variants={onItem} />
//     <motion.li variants={onItem} />
//     <motion.abbr variants={onItem}>STE</motion.abbr>

// </motion.ul>

export {container, onItem}