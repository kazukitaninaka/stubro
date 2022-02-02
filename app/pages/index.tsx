import { useState } from 'react';
import type { NextPage } from 'next';
import Card from '../components/Card';
import ConfirmModal from '../components/ConfirmModal';
import { MentorApi, Mentor } from '../api/api';
import axios from 'axios';

const Home = ({ mentors }: { mentors: Mentor[] }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className='flex flex-wrap gap-5 justify-evenly'>
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
  // const api = new MentorApi();
  const mockUrl = 'http://127.0.0.1:3001/mentors';
  const res = await axios.get(mockUrl);
  const mentors = res.data;
  return {
    props: {
      mentors,
    },
  };
}
