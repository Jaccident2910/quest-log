import Image from "next/image";
import Link from 'next/link'

function StartButton() {
 return(
  <Link href="/quests">
    <button> Click here to head to the Quests page!</button>
  </Link>
 )

}


export default function Home() {
  return ( <>
  <main>
    <h1>Welcome to Quest Log!</h1>
    <p>
      Quest Log is a to-do list designed to act similarly to Destiny's quest system!
      Each "quest" gives you a certain type of point, which you can the spend in the shop
      on rewards of your own design and choosing!
    </p>
    < StartButton />
  </main>
  </>
  );
}
