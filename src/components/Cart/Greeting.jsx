const Greeting = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-1 m-5 ">
          {/* Billing Info */}
          <div className="p-5  bg-white rounded shadow  mx-4 flex-1">
            <h2 className="text-2xl font-semibold">Customer Information</h2>

            <div className="p-2">
              <label>Full Name</label>
              <div className="w-full bg-gray-100 p-2 my-1">John Doe</div>
            </div>

            <div className="p-2">
              <label>Email</label>
              <div className="w-full bg-gray-100 p-2 my-1">
                mukut.m.das2000@gmail.com
              </div>
            </div>
            <div className="p-2">
              <label>Phone Number</label>
              <div className="w-full bg-gray-100 p-2 my-1">+91 9142324082</div>
            </div>

            <div className="p-2">
              <label>Address</label>
              <div className="w-full bg-gray-100 p-2 my-1">John Doe</div>
            </div>
            <div className="p-2">
              <div className="w-full bg-gray-100 p-2 my-1">Ranchi</div>
              <div className="w-full bg-gray-100 p-2 my-1">Jharkhand</div>
              <div className="w-full bg-gray-100 p-2 my-1">834001</div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="w-[50%] mx-auto p-4 md:p-6 bg-white">
          {/* Ticket Wrapper */}
          <div className="relative bg-[#5e2c0d] text-white overflow-hidden rounded-2xl">
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gray-200 rounded-t-full"></div>

            {/* Order Summary Title */}
            <div className="pt-8 px-8">
              <h2 className="text-5xl font-light mb-4">Order Summary</h2>
              <div className="h-px w-full bg-white/30 mb-6"></div>

              {/* Order Details */}
              <div className="flex justify-between mb-6">
                <div className="flex-1">
                  <p className="text-sm mb-2">Date</p>
                  <p className="font-medium">02 Oct 2023</p>
                </div>
                <div className="flex-1 border-x border-white/30 px-4">
                  <p className="text-sm mb-2">Order Number</p>
                  <p className="font-medium">0215-451512152</p>
                </div>
                <div className="flex-1 pl-4">
                  <p className="text-sm mb-2">Payment Method</p>
                  <p className="font-medium">Cash</p>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div className="px-8 py-4">
              <div className="flex justify-between mb-8">
                <div>
                  <p>Size : 12</p>
                  <p>Qty : 01</p>
                </div>
                <p className="font-medium">₹3,000</p>
              </div>

              <div className="flex justify-between mb-8">
                <div>
                  <p>Size : 12</p>
                  <p>Qty : 01</p>
                </div>
                <p className="font-medium">₹3,000</p>
              </div>

              {/* Separator Line */}
              <div className="h-px w-full bg-white/30 mb-4"></div>

              {/* Pricing Summary */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <p>Sub Total</p>
                  <p>₹3,000</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>₹500</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>₹50</p>
                </div>
              </div>

              {/* Separator Line */}
              <div className="h-px w-full bg-white/30 my-4"></div>

              {/* Order Total */}
              <div className="flex justify-between mb-8">
                <p className="text-lg font-medium">Order Total</p>
                <p className="text-lg font-medium">₹3550</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex  justify-center gap-5 items-center rounded shadow p-4 m-4 text-center text-3xl">
        <img src="/thankyou.png" width={30} height={30} />
        <p>Kudos !! Your Order is confirmed</p>
      </div>
    </>
  );
};

export default Greeting;
