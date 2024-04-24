export default {
  base: 'md:w-7 md:h-7 w-7 h-7 hover:bg-transparent dark:hover:bg-transparent dark:ring-0 text-slate-400 dark:text-slate-400 hover:text-primary font-thin',
  wrapper: 'gap-0',
  rounded: 'rounded-[4px]',
  default: {
    size: 'sm',
    activeButton: {
      class: 'active-pagination-btn',
      color: 'primary',
      variant: 'solid',
    },
    inactiveButton: {
      color: 'white',
      variant: 'ghost',
    },
    prevButton: {
      color: 'primary',
      variant: 'ghost',
    },
    nextButton: {
      color: 'primary',
      variant: 'ghost',
    },
  },
}
