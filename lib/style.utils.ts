const twGroup = (group: string, className: string) => {
  return className
    .split(' ')
    .map((name) => `${group}:${name}`)
    .join(' ');
};

export const styleUtils = { twGroup };
