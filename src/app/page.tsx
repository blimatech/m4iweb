import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="items-center justify-center align-middle">
          <Image
            src="/images/LogoM4I.png"
            width={500}
            height={500}
            alt="M4I - Manutenção Industrial Lda"
            className="m-auto"
          />
        </div>
      </div>
    </>
  );
}
