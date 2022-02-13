#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.argument('<filepath1>')
.argument('<filepath2>')
.version('0.1.0')
.option('-f, --format <type>', 'output format');


program.parse();
