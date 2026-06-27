import * as core from '@actions/core';
try {
    const username = core.getInput('username');
    core.info(`Hello : ${username || "Name not found!"}`);
}
catch (error) {
    core.setFailed(error.message);
}
