import jenkinsClient from 'jenkins';
import anybar from 'anybar';

async function getLastBuildState (jenkins, jobName) {
  const jobInfo = await jenkins.job.get(jobName);
  const buildNumber = jobInfo.lastBuild.number;
  const lastBuildInfo = await jenkins.build.get(jobName, buildNumber);
  const status = lastBuildInfo.result;

  return status;
}

async function updateStatus (jenkinksUrl, jobName) {
  const jenkins = jenkinsClient({ baseUrl: jenkinksUrl, promisify: true });
  const status = await getLastBuildState(jenkins, jobName);

  if (status === 'SUCCESS') {
    anybar('green');
  } else if (status === 'ERROR') {
    anybar('red');
  } else {
    anybar('yellow');
  }
}

// setInterval(() => {
//   updateStatus(jenkinksUrl, jobName);
// }, 1000);
