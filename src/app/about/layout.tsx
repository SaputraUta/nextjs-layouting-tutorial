import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      Ini adalah layout di halaman about, sehingga kita tidak dapat melihatnya
      di halaman contact
    </div>
  );
}
