import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Hotel, Phone, UserCog, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react';

interface Contact {
  name: string;
  phone?: string;
  role?: string;
}

interface ContactGroup {
  title: string;
  icon: React.ReactNode;
  contacts: Contact[];
}

const contactGroups: ContactGroup[] = [
  {
    title: "Mentors",
    icon: <UserCog className="h-5 w-5" />,
    contacts: [
      {
        name: "Prerna Yadav",
        role: "Mentor",
      },
      {
        name: "Sahib Preet Singh",
        role: "Mentor",
      },
    ],
  },
  {
    title: "IEEE Delhi Section Student Representatives",
    icon: <Mail className="h-5 w-5" />,
    contacts: [
      {
        name: "Spruha kar",
        phone: "+91-7217861438",
        role: "Contact Person",
      },
      {
        name: "Rishabh Jha",
        phone: "+91-8076473797",
        role: "Contact Person",
      },
    ],
  },
  {
    title: "Student Coordinators",
    icon: <Users className="h-5 w-5" />,
    contacts: [
      {
        name: "Nidhi Gupta",
        phone: "+91-9211506201",
        role: "Student Coordinator",
      },
      {
        name: "Ananya Jain",
        phone: "+91-8586078543",
        role: "Student Coordinator",
      },
      {
        name: "Kumar Amrendram",
        phone: "+91-9625854106",
        role: "Student Coordinator",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function RegistrationGuidelines() {
  return (
    <section
      className="container mx-auto px-4 py-8 md:px-6 lg:px-8"
      id="registration-guidelines">
      <h1 className="text-4xl font-bold my-4 text-center text-primary">
        Registration Guidelines
      </h1>

      <div className="grid gap-6 md:grid-cols-2 text-lg">
        {/* Registration Rules */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-5 w-5" />
              Registration Rules
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Registration Per Person only</li>
              <li>Registration is non-transferable and non-refundable</li>
            </ul>
          </CardContent>
        </Card>

        {/* Event Registration */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CalendarDays className="h-5 w-5" />
              Event Registration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Workshop seats will be allocated on a first-come, first-served
                basis
              </li>
              <li>
                Certificate will be provided to all the congress attendees
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Accommodation Details
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Hotel className="h-5 w-5" />
              Accommodation Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Accommodation is available on a shared basis</li>
              <li>Check-in date: 8 February 2025</li>
              <li>Check-out date: 9 February 2025</li>
              <li>
                Additional accommodation days can be requested in advance at an
                extra cost of ₹1250 per day
              </li>
              <li>
                Food and refreshments are included in ticket price and for all
                participants
              </li>
            </ul>
          </CardContent>
        </Card> */}
      </div>

      {/* Registration Fees */}
      <Card className="mt-6 text-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Registration Fees
          </CardTitle>
          <CardDescription className="text-lg">
            
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Table className="mt-4 md:text-md"> */}
            {/* <TableHeader>
              <TableRow>
                <TableHead>Membership Type</TableHead>
                <TableHead>Without Accommodation</TableHead> */
                /* <TableHead>
                 With Accommodation{' '}
              
              <span style={{ color: 'red' }}>*Including Congress Registration Fees</span>
                </TableHead> */
              /* </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>IEEE Member</TableCell>
                <TableCell>₹700</TableCell> */
                /* <TableCell>₹1950</TableCell> */
              /* </TableRow>
              <TableRow>
                <TableCell>Non IEEE Member</TableCell>
                <TableCell>₹1250</TableCell> */
                /* <TableCell>₹2500</TableCell> */
              /* </TableRow>
            </TableBody>
          </Table> */}
        </CardContent>
      </Card>

      {/* Nearby Accommodations */}
      <Card className="mt-6 text-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Nearby Accommodations
          </CardTitle>
          <CardDescription className="text-red-500 text-sm">
            The participants will be responsible for bearing the cost of their accommodation.*
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="mt-4 md:text-md">
            <TableHeader>
              <TableRow>
                <TableHead>Hotel Name</TableHead>
                <TableHead>Distance from Venue</TableHead>
                <TableHead>Room Charges (per night) *without taxes</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Hotel Swathi</TableCell>
                <TableCell>300 m from BVICAM</TableCell>
                <TableCell>Twin Room: Without Breakfast: Rs. 2000</TableCell>
                <TableCell> <p className="text-sm text-gray-700 mt-2">
              Ravi: <a href="tel:+919560217756" className="text-blue-600 hover:text-blue-800">+919560217756</a>
            </p></TableCell>
              </TableRow>
              <TableRow>
              <TableCell>Hotel Golden Saffron By Qotel</TableCell>
              <TableCell>1.8 km from BVICAM</TableCell>
              <TableCell>Twin Room: Without Breakfast: Rs 2000</TableCell>
              <TableCell> <p className="text-sm text-gray-700 mt-2">
              Priya: <a href="tel:+919311414031" className="text-blue-600 hover:text-blue-800">+919311414031</a>
            </p></TableCell>
              </TableRow>
              <TableRow>
              <TableCell>Swift Inn</TableCell>
              <TableCell>3.8 km from BVICAM</TableCell>
              <TableCell> Twin Room: With Breakfast: Rs. 3000<br/>Twin Room: Without Breakfast: Rs. 2500</TableCell>
              <TableCell> <p className="text-sm text-gray-700 mt-2">
              Anju: <a href="tel:+918700538574" className="text-blue-600 hover:text-blue-800">+918700538574</a>
            </p></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="mt-4 p-4 bg-Red-100 rounded-lg">
            <p className="text-lg text-red-700">
              <span className="text-lg font-bold">Note: </span> In the event of an extreme emergency, you may contact us for last minute arrangements for accommodations.
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Mukul Bhardwaj: <a href="tel:+9195361728127" className="text-blue-600 hover:text-blue-800">+9195361728127</a>
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Contact Information */}
      <div className="py-12 space-y-6">
        {contactGroups.map((group, idx) => (
          <div key={group.title}>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                {group.icon}
              </div>
              <h2 className="text-2xl font-semibold">{group.title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.contacts.map((contact) => (
                <Card
                  key={contact.name}
                  className="group border-0 bg-white/5 transition-all hover:bg-white/10">
                  <CardContent className="p-3">
                    <div className="space-y-1">
                      <div>
                        <h3 className="text-lg font-medium">{contact.name}</h3>
                        <p className="text-sm text-gray-400">{contact.role}</p>
                      </div>
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone}`}
                          className="inline-flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
