import jenkinsClient from 'jenkins';
import anybar from 'anybar';

async function getLastBuildState (jenkins, jobName) {
  const jobInfo = await jenkins.job.get(jobName);
  const buildNumber = jobInfo.lastBuild.number;
  const lastBuildInfo = await jenkins.build.get(jobName, buildNumber);
  const status = lastBuildInfo.result;

  return status;
}

async function updateStatus (jenkins, jenkinksUrl, jobName) {
  try {
    const status = await getLastBuildState(jenkins, jobName);

    if (status === 'SUCCESS') {
      anybar('green');
    } else if (status === 'ERROR') {
      anybar('red');
    } else {
      anybar('yellow');
    }
  } catch (err) {
    console.error(err);
    anybar('exclamation');
  }
}

const args = process.argv.slice(2);
const [jenkinksUrl, jobName] = args;
const jenkins = jenkinsClient({ baseUrl: jenkinksUrl, promisify: true });

console.log('Starting Jenkins monitoring:', jenkinksUrl, jobName);

setInterval(() => {
  updateStatus(jenkins, jenkinksUrl, jobName);
}, 5 * 1000);
