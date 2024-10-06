import Split from 'split-grid';

Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector('#col-gutter')!,
    },
  ],
});

const rowGutter = document.querySelector('#row-gutter') as HTMLDivElement;
const rowsGrid = document.querySelector('#rows-grid') as HTMLDivElement;
const toolbar = document.querySelector('#toolbar') as HTMLDivElement;
rowGutter.addEventListener('click', () => {
  if (toolbar.style.visibility === 'hidden') {
    rowsGrid.style.gridTemplateRows = '16px 8px 1fr';
    toolbar.style.visibility = 'visible';
  } else {
    rowsGrid.style.gridTemplateRows = '0px 8px 1fr';
    toolbar.style.visibility = 'hidden';
  }
});
