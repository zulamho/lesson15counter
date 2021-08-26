import { useSelector } from "react-redux";


function Number() {
  const number = useSelector((state) => {
    //сокрщ number = useSelector((state) =>state.counter)
    //в кач парам принимает калбек функц(котор прин одн пар стате)
    return state.counter; // здесь получаем конкр ключ из стайта (этим отличается от других хуков)
  });

  return <div>{number}</div>;
}
export default Number;
