import React from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
  <div className="bg-[url('https://s3-alpha-sig.figma.com/img/86b3/4e3b/d6374c0b8166b2787b822c93fa82e518?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f55k~pVA81Cn7gpqLB7Xp0pvhG98FsXr5TRnRpjb9HFEYCdEyj4lnPqKBSll-bA8NK1aVBNfVElow~Jgsf99dVCnddBwXCdckfUTS5bmSFsv6vbtClFZ~9UUeqWhDrlJqdu4e2lMLqb4brwjyeGUnytuzEa4D6m1EJTCh6h4sBt-ld2u8cPOlrTK2IVZmutLqmvJMyplV35h38evIZ6P1VG32fszoxQRYKgKLz2OvxEZZ3b8cyPRZ~w7CksFEl0DqUBp2GpMkq20kb9Q8wwNsPqKNs1RmiXaX-TxbFzu3ZL0BKxY~xKf0QSLTHxfE4IGrEewkWLMDZZVPU13n-L8LA__')] bg-cover bg-center min-h-screen w-full">
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchBox />
    </div>
  </div>
  );
};

export default Home;
