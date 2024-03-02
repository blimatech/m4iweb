import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="items-center justify-center align-middle">
          <Image
            src="/images/Logo.png"
            width={500}
            height={500}
            alt="M4I - Manutenção Industrial Lda"
          />
        </div>
      </div>
    </>
  );
}
