"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type LeaderboardEntry = {
  id: number;
  username: string;
  score: number;
};

const fakeData: LeaderboardEntry[] = [
  { id: 1, username: "Javo", score: 23 },
  { id: 2, username: "Alice", score: 19 },
  { id: 3, username: "Bob", score: 17 },
  { id: 4, username: "Charlie", score: 15 },
  { id: 5, username: "Diana", score: 12 },
];

export default function Leaderboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeData.map((entry, index) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{entry.username}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
