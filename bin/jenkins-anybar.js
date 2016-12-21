#!/usr/bin/env node
import { start, stop } from '../service';

const args = process.argv.slice(2);
const [command, jenkinsUrl, jobName] = args;

if (command === 'start') {
  start([jenkinsUrl, jobName]);
}

if (command === 'stop') {
  stop();
}
