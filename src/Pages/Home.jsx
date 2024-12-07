import Card from '../Components/Card';
import { useDoctorState } from '../Context/global.context';


const Home = () => {
  const { state } = useDoctorState();

  return (
    <>
      <h1>Home</h1>
      <div className= {'light-theme list-container'}>
        {console.log(state.doctors)}
        {state.doctors?.map((doctor) => {
          return <Card key={doctor.id} doctor={doctor} />
        })
        }
      </div>
    </>
  );
};

export default Home