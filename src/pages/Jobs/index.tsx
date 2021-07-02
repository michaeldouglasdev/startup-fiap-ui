import React, { useEffect, useState } from 'react';
import Root from '../../components/Root';
import api from '../../services/api';
import { Job } from '../../models/Job';
import JobOpportunity from '../../components/Job';
import { List } from '../../components/Position/styled';
import { useHistory } from 'react-router-dom';

const JobsPage: React.FC = () => {

	const [jobs, setJobs] = useState<Job[]>([{} as Job]);
	const history = useHistory();

	useEffect(() => {

		async function getJobs() {
			const jobsResponse = await api.get('/jobs');

			setJobs(jobsResponse.data.items);
		}

		getJobs();
	}, []);

	const goToJobPage = (id: any): any => {
		history.push(`/jobs/${id}`);
	}

	return (
		<>
			<Root titlePage="Vagas" description={`${jobs.length ? jobs.length : ''} ${jobs.length ? 'vagas encontradas!' : ''}`}>
				{jobs.length > 0 &&
					<List>
						{jobs.map(job => (
							<JobOpportunity title={job.title} description={job.description} city={job.city} state={job.state} date={job.registerDate} salary={job.salary} onClick={() => goToJobPage(job._id)} requiredSkills={job.requiredSkills} />
						))}

					</List>
				}
			</Root>
		</>
	)
}

export default JobsPage;