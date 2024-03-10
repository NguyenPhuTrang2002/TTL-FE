import ListContent from "./ListContent"
const ArrayList = [
  {
    icon: (
      <img src="./icons/iconhome1.svg" alt="" />
    ),
    title: "4pt grid system",
    content: "Base on 4pt grid system. Our UI kit help you create perfect white space"
  },
  {
    icon: (
      <img src="./icons/iconhome2.svg" alt="" />
    ),
    title: "Color style",
    content: "All color in OpenArt are styled. You can change all design color with one clickBase on 4pt grid system. Our UI kit help you create perfect white space"
  },
  {
    icon: (
      <img src="./icons/iconhome3.svg" alt="" />
    ),
    title: "Free font",
    content: "OpenArt use Epilogue font family Available with open licence in gooogle fontBase on 4pt grid system. Our UI kit help you create perfect white space"
  },
  {
    icon: (
      <img src="./icons/iconhome4.svg" alt="" />
    ),
    title: "Darkmode avaiable",
    content: "BOur UI Kit support darkmode Chage your design to dark mode with one clickase on 4pt grid system. Our UI kit help you create perfect white space"
  },
  {
    icon: (
      <img src="./icons/iconhome5.svg" alt="" />
    ),
    title: "Easy to customize",
    content: "Create any design with OpenArt UI kits "
  },
  {
    icon: (
      <img src="./icons/iconhome6.svg" alt="" />
    ),
    title: "Variant components",
    content: "All component art variant, easy to design, easy to control"
  },

]
const Index = () => {
  return (
    <div className="px-[65px]">
      <h1 className="text-[#000] text-center font-bold text-[56px] pb-[90px] pt-[100px]">Inside Open Art</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          ArrayList.map((array, index) => (
            <ListContent key={index} icon={array.icon} title={array.title} content={array.content} />
          ))}
      </div>
    </div>

  )
}

export default Index