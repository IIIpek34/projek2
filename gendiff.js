import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<firstConfig> <secondConfig>')
  .option('-v, --version', 'output the version number')
  .option('-f, --format [type]', 'output format');

program.parse();
