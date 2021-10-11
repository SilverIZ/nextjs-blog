import axios from "axios";

export default function testData(props) {
  console.log(props);
  return (
    <>
      <h1>Test Data</h1>
      {props.datas.map((student) => (
        <p key={student.id}>
          {student.first_name} {student.last_name}
        </p>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const allStudents = await axios.get("https://reqres.in/api/users?page=2");
  console.log("datas", allStudents);
  const datas = await allStudents.data.data;

  return {
    props: {
      datas,
    },
  };
}

//line 8
{
  /* {props.datas.map((student, index) => {
        <p key={index}>{student.name}</p>;
      })} */
}

//line 18
//   const allStudents = { id: 1, name: "iskandar" };
