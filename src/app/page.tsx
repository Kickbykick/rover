import DropListPage from "@/components/DropListPage";
import Items from "@/components/Item";
import { imageName } from "@/config/data";
// import { workExperience } from "@/config/imageName"

export default function Home() {
  return (
    <DropListPage/>
    // <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
    //   <div className="grid sm:grid-cols-2 sm:grid-row-3 gap-6 mx-auto">
    //     {imageName.map((image, index) => (
    //         <Items 
    //             key={index}
    //             image={image}
    //         />
    //     ))}
    //   </div>
    // </main>
  );
}
