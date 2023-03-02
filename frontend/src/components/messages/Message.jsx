import React from "react";
import styles from "./Message.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MessageUserProfile from "./MessageUserProfile";
import image from "../../assets/images/profile.png"

export default function Message() {
  return (
    <React.Fragment>
      <main className="content">
        <div className="container p-0">
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-5 col-xl-3 border-right">
                <p className={styles["user-header"]}>Message</p>
                <div className={styles["user-list"]}>
                  <MessageUserProfile
                    username="안호성"
                    job="프론트엔드"
                    isSelected={true}
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count='5'
                  />
                </div>

                <hr className="d-block d-lg-none mt-1 mb-0" />
              </div>
              <div className="col-12 col-lg-7 col-xl-9">
                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                  <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                      <img
                        src={image}
                        className={styles.image}
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <strong>안호성</strong>
                      <div className="text-muted small">
                        프론트엔드
                      </div>
                    </div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className={`${styles["chat-messages"]} p-4`}>
                    <div className={`${styles["chat-message-right"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:33 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:34 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-right"]} mb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:35 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Cum ea graeci tractatos.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:36 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:37 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Cras pulvinar, sapien id vehicula aliquet, diam velit
                        elementum orci.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-right"]} mb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:38 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:39 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-right"]} mb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:40 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Cum ea graeci tractatos.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-right"]} mb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:41 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Morbi finibus, lorem id placerat ullamcorper, nunc enim
                        ultrices massa, id dignissim metus urna eget purus.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:42 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-right"]} mb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:43 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className={`${styles["chat-message-left"]} pb-4`}>
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:44 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">
                          Sharon Lessman
                        </div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["flex-grow-0"]} ${styles["py-3"]} ${styles["px-4"]} ${styles["border-top"]}`}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message"
                    />
                    <button className="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
