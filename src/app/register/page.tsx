"use client";   
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const steps = ["Personal Info", "Membership Info", "Account Info"];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
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
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Submit form logic
    alert("Registration submitted!");
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-8 mt-8">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        Register
      </h1>
      <div className="flex justify-center gap-2 mb-8">
        {steps.map((label, i) => (
          <div
            key={label}
            className={`flex-1 h-2 rounded-full ${
              i <= step ? "bg-primary" : "bg-secondary"
            }`}></div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="space-y-4">
            <Input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        {step === 1 && (
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <Input
                type="checkbox"
                name="isMember"
                checked={form.isMember}
                onChange={handleChange}
              />
              IEEE CS Chapter Member
            </label>
            {form.isMember && (
              <Input
                name="membershipId"
                value={form.membershipId}
                onChange={handleChange}
                placeholder="IEEE Membership ID"
                className="w-full px-4 py-2 border rounded"
                required={form.isMember}
              />
            )}
            <label className="block">
              ID Card Upload
              <Input
                type="file"
                name="idCard"
                accept="image/*,application/pdf"
                onChange={handleChange}
                className="mt-2"
                required
              />
            </label>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <Input
              name="institution"
              value={form.institution}
              onChange={handleChange}
              placeholder="Institution/Company"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <Input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="Designation"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
        )}
        <div className="flex justify-between mt-8">
          {step > 0 && (
            <Button
              type="button"
              onClick={prevStep}
              className="hoverable px-4 py-2 rounded bg-secondary text-primary">
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="hoverable px-4 py-2 rounded bg-primary text-white">
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="hoverable px-4 py-2 rounded bg-primary text-white">
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
