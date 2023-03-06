import React from "react";
import styles from "./Chats.module.css";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import image from "../../assets/images/profile.png";

export default function Chats() {
  return (
    <React.Fragment>
      <div className={`${styles["chat-messages"]} p-4`}>
        <ChatRight
          text="안녕하세요"
          image={image}
          name="안호성"
          date={new Date("2020-01-01")}
        />
        <ChatLeft
          text="안녕못한데?"
          image={image}
          name="윤강"
          date={new Date("2020-01-01")}
        />
        <ChatRight
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum.
                      Qui, voluptate! Quae consequuntur deleniti veniam fugiat illo unde repellendus. Quis beatae tempora, aliquid quae illo praesentium ducimus magni velit nemo saepe odio id distinctio? Labore aspernatur impedit molestiae magni?"
          image={image}
          name="안호성"
          date={new Date("2020-01-01")}
        />
        <ChatLeft
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum?"
          image={image}
          name="윤강"
          date={new Date("2020-01-01")}
        />
        <ChatRight
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum.
                      Qui, voluptate! Quae consequuntur deleniti veniam fugiat illo unde repellendus. Quis beatae tempora, aliquid quae illo praesentium ducimus magni velit nemo saepe odio id distinctio? Labore aspernatur impedit molestiae magni?"
          image={image}
          name="안호성"
          date={new Date("2020-01-01")}
        />
        <ChatLeft
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum?"
          image={image}
          name="윤강"
          date={new Date("2020-01-01")}
        />
      </div>
    </React.Fragment>
  );
}
