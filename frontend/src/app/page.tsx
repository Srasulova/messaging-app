'use client'

import Conversation from "./components/conversation";
import InputText from "./components/form";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Conversation />
        <InputText />
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
