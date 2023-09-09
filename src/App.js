import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "./components/Container/Container";
import { GetRequest } from "./components/GetRequest/GetRequest";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PostRequest } from "./components/PostRequest/PostRequest";
import { Success } from "./components/Success/Success";
import { Footer } from "./components/Footer/Footer";
import { fetchAllUsers, fetchPosition } from "./services/api-services";

function App() {
  const [usersCard, setUsersCard] = useState(null);
  const [positions, setPositions] = useState(null);
  // const [page, setPage] = useState(1);
  // const [card, setCard] = useState([]);
  // const [count, setCount] = useState(6);

  useEffect(() => {
    async function getAllUsers() {
      try {
        // setReqStatus("pending");
        const users = await fetchAllUsers();
        setUsersCard(users);
        // setPage(1);
        // setCard([]);
        // setReqStatus("resolved");
      } catch (error) {
        // setReqStatus("rejected");
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  // const getMoreUsers = async () => {

  //   try {
  //     const { user } = await fetchAllUsers(page, count);
  //     console.log({ user });
  //     setCard([...card, ...usersCard]);
  //     setPage((page) => page + 1);
  //     if (page !== 1) {
  //       scrollOnLoadButton();
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  // const scrollOnLoadButton = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    async function getPosition() {
      try {
        const position = await fetchPosition();
        setPositions(position);
      } catch (error) {
        console.log(error);
      }
    }
    getPosition();
  }, []);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Hero />
      <Container>
        <GetRequest title="Users" id="users" users={usersCard} />
        <PostRequest title="Sing up" id="singup" position={positions} />
        {false && <Success />}
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
