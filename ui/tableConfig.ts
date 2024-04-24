export default {
  table: {
    base: 'overflow-visible border-separate border-spacing-y-1',

    tr: {
      selected: 'bg-gray-100 dark:bg-gray-700/30',
      active: 'hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer',
    },
    thead: 'dark:bg-gray-950 bg-gray-100 divide-none first:divide-none my-6 py-6',
    divide: 'divide-none',
    tbody: 'divide-none ',
    th: {
      base: 'first:rounded-l-lg last:rounded-r-lg text-left rtl:text-right py-6',
    },
    td: {
      base: 'last:rounded-r-lg',
    },
    checkbox: {
      padding: 'rounded-l-lg ps-4',
    },
  },
}
