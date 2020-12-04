// arrange
const fs = require('fs');
fs.rmdir('features', { recursive: true });
fs.rmdir('report', { recursive: true });
fs.mkdir('features')
fs.writeFileSync('/features/my.feature', `
Feature: Burpless
In order to sleep well at night
As a test report geek
All I ask for is a small simple script that I can mess with for my needs

Scenario: this is the scenario
Given a precondition
When I run the Test
Then I can see OK!! on the screen`);

// act
require('burpless')
burpless.generate()
 