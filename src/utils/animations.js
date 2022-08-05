export const growVariant = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },

  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInUpVariant = {
  initial: {
    y: 10,
    opacity: 0,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
