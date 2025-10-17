"use client"

import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default  function Privacy() {

  




  return (
    <div className="mt-20 lg:mx-20 bg-white border-b-1 mb-30">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] ">
        {/* Left Section (Desktop Sticky Only) */}
        <div className="hidden lg:flex items-start  justify-start">
          <div className="sticky top-20 h-fit">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
        </div>

        {/* Mobile Title (only visible below lg) */}
        <div className="lg:hidden w-full p-4 lg:border-b bg-white ">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>

        {/* Right Section (Scrollable) */}
        <div className="lg:border-l border-b overflow-y-auto no-scrollbar">
          <div className="p-6 w-full mx-auto">
            <Card className="shadow-none border-0">
              <CardContent className="text-sm font-semibold leading-relaxed space-y-4">
                <h2 className="font-bold text-lg">
                  FOSSIL TERMS AND CONDITIONS
                </h2>
                <p>
                  <strong>LAST UPDATED:</strong> May 5, 2025
                </p>

                <p>
                  These Terms and Conditions ("Terms") govern your use of
                  Fossil.com, owned and operated by Fossil Group, Inc. ("Fossil,"
                  "we," "us," or "our"). By accessing or using Fossil.com, you
                  agree to be bound by these Terms.
                </p>

                <p>
                  By using our website, you agree to use it for personal,
                  non-commercial purposes. You are responsible for maintaining
                  the confidentiality of your account information and for all
                  activities that occur under your account.
                </p>

                <p>
                  All orders are subject to acceptance and availability. We
                  accept various payment methods, including credit cards and
                  PayPal. You authorize us to charge your payment method for the
                  total amount of your order, including any applicable taxes,
                  shipping, and handling charges.
                </p>

                <p>
                  We strive to deliver products within the estimated timeframe.
                  Shipping costs and delivery times vary depending on your
                  location. You are responsible for providing accurate shipping
                  information.
                </p>

                <p>
                  You may return products within 30 days of delivery. Products
                  must be in original condition with all tags and packaging.
                  Refunds will be issued in the original payment method.
                </p>

                <p>
                  We strive to accurately describe and depict products on our
                  website. However, product colors may vary slightly due to
                  display settings.
                </p>

                <p>
                  All content on our website, including text, images, and logos,
                  is owned by Fossil or licensed to us. You may not reproduce,
                  distribute, or modify any content without our prior written
                  consent.
                </p>

                <p>
                  Our products are warranted to be free from defects in
                  materials and workmanship. However, we are not liable for any
                  damages or losses resulting from the use of our products.
                </p>

                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Texas. Any disputes arising out
                  of or related to these Terms shall be resolved through binding
                  arbitration.
                </p>

                <p>
                  We reserve the right to modify these Terms at any time without
                  notice. Your continued use of our website after changes are
                  made constitutes your acceptance of the revised Terms.
                </p>

                <p>
                  If you have any questions or concerns about these Terms,
                  please contact us at support@fossil.com. By using our website,
                  you acknowledge that you have read, understood, and agree to
                  be bound by these Terms and Conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}











