import { RouteViews } from "../../design/@RouteViews/route"
const Legal = ({ legalType }: { legalType: string }) => {

    return (
        <RouteViews>

        <div className="modal">
            <article className="modal-container">
                <header className="modal-container-header">
                    <span className="modal-container-title">
                        <svg aria-hidden="true" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" fill="currentColor"></path>
                        </svg>
                        {legalType}
                    </span>
                    <button className="icon-button">
                        {/* <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
                        </svg> */}
                    </button>
                </header>
                <section className="modal-container-body rtf">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.

                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.

                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.


                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi? Quibusdam nam maxime voluptatem obcaecati veniam nihil ex accusamus dolorem voluptatibus, suscipit
                     quos tenetur ipsa architecto dignissimos ipsam recusandae odio.
                   
                </section>
                {/* <footer className="modal-container-footer">
                    <button className="button is-ghost">Decline</button>
                    <button className="button is-primary">Accept</button>
                </footer> */}
            </article>
        </div>
        </RouteViews>
    )
};

export default Legal;