import { useState } from 'react';
import type { NextPage } from 'next';
import Card from '../components/Card';
import ConfirmModal from '../components/ConfirmModal';
import { MentorApi, Mentor, Configuration } from '../api';
import axios from 'axios';

const Home = ({ mentors }: { mentors: Mentor[] }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className='flex flex-wrap gap-5'>
        {mentors.map((mentor) => (
          <Card key={mentor.id} mentor={mentor} setIsModalOpen={setIsModalOpen} />
        ))}
      </div>
      <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const api = new MentorApi();
  const res = await api.getMentors();
  const mentors = res.data;

  return {
    props: {
      mentors,
    },
  };
}
