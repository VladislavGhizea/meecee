import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-verde">
      {/* div sfondo */}
      <div>
        <Image
          src={"/menu-01.svg"}
          alt={""}
          width={32}
          height={32}
          className=" relative top-8 ml-8 justify-self-start mb-28"
        />
      </div>
      {/* header */}
      <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
        {/* div grid */}
        <div className="logo-container">
          <div className=" flex justify-center">
            <div className=" w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end">
              <Image alt="" src={"/logo.png"} width={104} height={104} />
            </div>
          </div>
          <div className="brand_name-container">
            <Image
              alt=""
              src={"/brand.svg"}
              width={1344}
              height={512}
              className=" w-[336px] h-[128px]"
            />
            <h2 className=" text-center mb-20 text-white text-xl font-medium font-montserrat -mt-3">
              MOTTO DI UNA RIGA
            </h2>
          </div>
        </div>

        <div className="buttons-container text-center">
          <div className=" h-16 w-52 bg-giallo drop-shadow-md rounded-2xl mb-9 flex items-center justify-center text-3xl font-medium">
            Accedi
          </div>
          <div className=" h-16 w-52 bg-giallo drop-shadow-md rounded-2xl flex items-center justify-center text-3xl font-medium">
            Registrati
          </div>
        </div>
      </div>
    </div>
  );
}
