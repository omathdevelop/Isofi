import { Outlet } from "react-router-dom";
import NaviGation from "../../components/@Navigation/component";
import Legal from "../../components/@Legal/component";
const PrivacyPolicy = () => {
    return (
    <>
    <NaviGation/>
    <Outlet/>
      <Legal legalType={'Privacy Policy'}/>
      </>
    )
};

export default PrivacyPolicy;












































 {/* <AnyView className={'content'}>
    <TextView as={'h2'} className={'text'}>Privacy Policy</TextView>
    <TextView>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aut assumenda voluptas dolorem commodi quasi aliquam autem provident nostrum excepturi repellat saepe, 
        dolor quae tenetur officiis fugit reprehenderit, amet vitae!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur neque nesciunt vero quasi, sed libero nisi aperiam ipsum veritatis aliquid fugiat optio
          at id dignissimos officiis natus. Perspiciatis, quos.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aspernatur cumque temporibus labore consequatur eum. Ipsam impedit facere dolorem vero, cum culpa velit similique, hic,
           tempore eius animi exercitationem nihil?
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed amet sint repellat, ratione repudiandae eaque beatae ducimus tempora incidunt? Porro aperiam repudiandae odio,
            possimus soluta laboriosam nam fuga commodi a?
        </TextView>
    </AnyView> */}
