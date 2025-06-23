"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Mail,
  Phone,
  Users,
  Shield,
  Building,
} from "lucide-react";

const steps = ["Personal Info", "Membership Info", "Account Info"];
import { type FormData } from "@/types/form.types";
import { DotBackground } from "@/components/ui/dot-background";

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    isMember: false,
    membershipId: "",
    idCard: null as File | null,
    password: "",
    institution: "",
    designation: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }
  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    // TODO: Submit form logic
    alert("Registration submitted!");
  }

  const getStepIcon = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <User className="w-4 h-4" />;
      case 1:
        return <Users className="w-4 h-4" />;
      case 2:
        return <Shield className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  return (
    <DotBackground>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="relative z-10">
          {/* Main container */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl p-8 relative border border-neutral-800">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Register</h1>
            </div>

            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((label, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center relative flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2 ${
                        i <= step
                          ? "bg-blue-800 text-white border-blue-500 shadow-lg shadow-blue-900"
                          : "bg-neutral-800 text-neutral-500 border-neutral-700"
                      }`}>
                      {i < step ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        getStepIcon(i)
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        i <= step ? "text-blue-300" : "text-neutral-500"
                      }`}>
                      {label}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="absolute top-5 left-1/2 w-full h-0.5 bg-neutral-800 -z-10">
                        <div
                          className={`h-full bg-blue-800 transition-all duration-500 ${
                            i < step ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form content */}
            <div className="space-y-6">
              {step === 0 && (
                <div className="space-y-5 animate-in slide-in-from-right duration-300">
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <Input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full pl-12 pr-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                      required>
                      <option value="">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="bg-blue-950/30 border border-blue-900 rounded-xl p-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="isMember"
                          checked={form.isMember}
                          onChange={handleChange}
                          style={{ display: "none" }}
                          id="isMember"
                        />
                        <div
                          onClick={() =>
                            handleChange({
                              target: {
                                name: "isMember",
                                type: "checkbox",
                                checked: !form.isMember,
                              },
                            } as any)
                          }
                          className={`w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 ${
                            form.isMember
                              ? "bg-blue-800 border-blue-500"
                              : "border-neutral-700 bg-neutral-900 hover:border-blue-700"
                          }`}>
                          {form.isMember && (
                            <Check className="w-3 h-3 text-blue-200 m-0.5" />
                          )}
                        </div>
                      </div>
                      <label
                        className="text-blue-100 font-medium cursor-pointer"
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "isMember",
                              type: "checkbox",
                              checked: !form.isMember,
                            },
                          } as any)
                        }>
                        I am an IEEE CS Chapter Member
                      </label>
                    </div>
                  </div>

                  {form.isMember && (
                    <div className="animate-in slide-in-from-top duration-300">
                      <label className="block text-sm font-semibold text-blue-100 mb-2">
                        IEEE Membership ID *
                      </label>
                      <Input
                        name="membershipId"
                        value={form.membershipId}
                        onChange={handleChange}
                        placeholder="Enter your IEEE membership ID"
                        className="w-full px-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required={form.isMember}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Upload ID Card *
                    </label>
                    <div className="relative border-2 border-dashed border-neutral-700 rounded-xl p-6 text-center hover:border-blue-700 transition-colors duration-200 cursor-pointer group bg-neutral-800">
                      <input
                        type="file"
                        name="idCard"
                        accept="image/*,application/pdf"
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                      <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-blue-950 transition-colors duration-200">
                          <svg
                            className="w-6 h-6 text-blue-300 group-hover:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-blue-100 font-medium">
                            {form.idCard
                              ? form.idCard.name
                              : "Choose file or drag & drop"}
                          </p>
                          <p className="text-blue-300 text-sm">
                            PNG, JPG or PDF (max 5MB)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in slide-in-from-right duration-300">
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                      <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                    </div>
                    <p className="text-xs text-blue-300 mt-1">
                      Minimum 8 characters recommended
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Institution/Company *
                    </label>
                    <div className="relative">
                      <Input
                        name="institution"
                        value={form.institution}
                        onChange={handleChange}
                        placeholder="Your institution or company"
                        className="w-full pl-12 pr-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Designation *
                    </label>
                    <Input
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Your role or designation"
                      className="w-full px-4 py-3 border-2 border-neutral-800 bg-neutral-800 text-white placeholder:text-neutral-400 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-neutral-800">
              {step > 0 ? (
                <Button className="flex items-center space-x-2 px-6 py-3 text-blue-200 bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-all duration-200 font-medium border border-neutral-700">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </Button>
              ) : (
                <div></div>
              )}

              {step < steps.length - 1 ? (
                <Button className="flex items-center space-x-2 px-8 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 font-medium shadow-lg shadow-blue-900 hover:shadow-xl hover:shadow-blue-800 border border-blue-900">
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 px-8 py-3 bg-green-800 hover:bg-green-700 text-white rounded-xl transition-all duration-200 font-medium shadow-lg shadow-green-900 hover:shadow-xl hover:shadow-green-800 border border-green-900">
                  <Check className="w-4 h-4" />
                  <span>Complete Registration</span>
                </Button>
              )}
            </div>
          </div>

          {/* Footer text */}
          <p className="text-center text-blue-200/80 text-sm mt-6">
            Already have an account?{" "}
            <button className="text-blue-300 hover:text-white font-medium underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </DotBackground>
  );
}
