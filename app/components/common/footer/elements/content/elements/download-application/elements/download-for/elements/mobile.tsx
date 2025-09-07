import React from "react";
import DownloadTitle from "../../../../common/download-title";
import Image from "next/image";

const DownloadForMobile = () => {
  return (
    <div className="text-black">
      <DownloadTitle title="دانلود نسخه ی موبایل" />
      <div className="my-3 grid grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs">دریافت از:</p>
          <button>
            <Image src={""} alt="Google Play" width={108} height={24} />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DownloadForMobile;
