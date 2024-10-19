"use client"

import * as React from "react"
import ScrollTo from '../ui/scrollTo';
import { cn } from "../../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { HoveredLink } from "../ui/navbar-menu"
import { ModeToggle } from "../mode-toggle"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hospitals",
    href: "clients",
    description:
      "Hospitals Onboarded With Us",
  },
  {
    title: "AI Patient Response",
    href: "features",
    description:
      "AI which can suggest the best possible response to the patient's queries.",
  },
  {
    title: "Progress",
    href: "bentotwo",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description:
      "document that explains how an organization handles any customer, client or employee information gathered in its operations.",
  },
  
]

export function NavigationMenuNew() {
  return (
    
    <div id="mainLogo" className="w-full flex fixed justify-between z-50 md:px-10 bg-transparent backdrop-blur-lg -translate-x-4 sm:-translate-x-0">
      <div className="flex justify-between items-center gap-4 logo bg-transparent px-6 py-3 rounded-full">
        <HoveredLink href="/">
          <img src={'/HealersHealthcareOfficialLogo.png'} alt="Healers Healthcare" className="w-40 mx-auto"  />
        </HoveredLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block py-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Healer Healthcare
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Great Things Are Being Develop By Our Incredible Team
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ScrollTo to="ytLinks" >

                  <ListItem title="Introduction">
                    Know About Our Breif and Story
                  </ListItem>
                  </ScrollTo>
                  <ScrollTo to="clients" >

                  <ListItem  title="Onboards">
                    Get To Know About Our Clients
                  </ListItem>
                  </ScrollTo>
                  <ScrollTo to="app" >

                  <ListItem  title="Mobile Application">
                    Get Our Mobile Application 
                  </ListItem>
                  </ScrollTo>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <ScrollTo to="features">Features</ScrollTo>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <ScrollTo to="faq">FAQ</ScrollTo>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link to="/privacy-policy">
                Privacy Policy
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <ScrollTo to="contactUs">Contact Us</ScrollTo>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden py-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-semibold">
                Home
              </Link>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="getting-started">
                  <AccordionTrigger>Getting Started</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                    
                      <ScrollTo to="ytLinks">

                        Introduction
                      </ScrollTo>
                    
                   
                      <ScrollTo to="clients">

                        Onboards
                      </ScrollTo>
                  
                      <ScrollTo to="app">

                        Mobile App
                      </ScrollTo>
                      
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="components">
                  <AccordionTrigger>Components</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                        {components.map((component) => (
                        component.title !== "Privacy Policy" && (
                          <ScrollTo key={component.title} to={component.href}>
                          {component.title}
                          </ScrollTo>
                        )
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <ScrollTo to="features" >
                Features
              </ScrollTo>
              <ScrollTo to="FAQ" >
                FAQ
              </ScrollTo>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
              <ScrollTo to="contactUs">
                Contact Us
              </ScrollTo>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="connectWalletSection flex justify-between items-center rounded-full gap-5">
        {/* <ModeToggle /> */}
        <div className="mb-6 flex pt-5 my-auto items-center ml-2 sm:ml-0">
                  <a
                    href="https://twitter.com/Healers_Health"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/healershealthcare/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                  <a
                    href="https://linktr.ee/healershealthcare"
                    className="mr-3 flex h-6 w-6 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" text-Rendering="geometricPrecision" imageRendering="optimizeQuality" fill-rule="evenodd" clipRule="evenodd" viewBox="0 0 417 512.238"><path fill="#ffff" fill-rule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/>
                    </svg>
                  </a>



                </div>
        <img src={'/dfinityLogo1.png'} alt="Healers Healthcare" className="w-12 mx-auto hidden sm:block" />
        <Link to="https://gyoj3-uaaaa-aaaap-qkfra-cai.icp0.io/login">
          <button className="relative inline-flex h-10 w-24 sm:h-12 sm:w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
