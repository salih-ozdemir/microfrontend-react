import React, { Suspense, lazy } from "react";
const CommonHeader = lazy(() => import("common/Header"));
const RemoteHome = lazy(() => import("home/Home"));
const CommonFooter = lazy(() => import("common/Footer"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <CommonHeader />
      </Suspense>
      <h1>Shell Application</h1>
      <Suspense fallback={<div>Loading Home...</div>}>
        <RemoteHome />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <CommonFooter />
      </Suspense>
    </div>
  );
}