import React, { useEffect, useState } from 'react';
import Root from '../../components/Root';
import api from '../../services/api';
import { Job } from '../../models/Job';

const JobPage: React.FC = (props: any) => {

  const [job, setJob] = useState<Job>({} as Job);

  useEffect(() => {

    async function getJob() {
      const id = props.match.params.id;
      setJob((await api.get(`/jobs/${id}`)).data);
    }

    getJob();
  }, []);
  return (
    <Root titlePage={job.title}>

    </Root>
  )
}

export default JobPage;