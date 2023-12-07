"use client";
import { Box, Badge, Container, Link } from "@radix-ui/themes";
import { ThemeToggle } from "./common/ThemeToggle";
import { ConnectButton } from "./buttons/ConnectButton";
import { useNetwork } from "@starknet-react/core";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GITHUB_CONTRACTS_URL =
  "https://github.com/satyambnsal/cairo-smart-contracts/blob/5c4e3a1883b0b61000c6a9e239ed588e3b204146/src/starkvoice.cairo";

export const Header = () => {
  const { chain } = useNetwork();
  console.log(chain);
  return (
    <Container>
      <Box height="0" className="absolute left-4 top-8 flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href={GITHUB_CONTRACTS_URL} target="_blank">
          <GitHubLogoIcon />
        </Link>
      </Box>
      <Box
        height="0"
        className="absolute right-4 top-8 flex items-center gap-4"
      >
        {!!chain && !!chain.name && !!chain.network && (
          <Badge highContrast size="2">
            {chain.name} {chain.network}
          </Badge>
        )}
        <ConnectButton />
        <ThemeToggle />
      </Box>
    </Container>
  );
};
