<Router>
  <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/payment"
        element={
          <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
    </Routes>
  </div>
</Router>;
