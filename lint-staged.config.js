module.exports = {
    './src/**/*.(ts|tsx)': () => 'tsc --noEmit',
    './src/**/*.(ts|tsx|js|jsx)': (filenames) => [`eslint ${filenames.join(' ')}`, `prettier --list-different ${filenames.join(' ')}`],
    './src/**/*.(md|json|css|scss|pcss)': (filenames) => `prettier --list-different ${filenames.join(' ')}`,
    './src/**/*.(css|scss|pcss)': (filenames) => `stylelint ${filenames.join(' ')}`,
};
