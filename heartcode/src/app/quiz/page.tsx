"use client"; 
import { useState } from "react";
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod"; 
import { z } from "zod"; 
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"; 
import { Button } from "@/components/ui/button"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 
import { Input } from "@/components/ui/input"; 
import { useToast } from "@/hooks/use-toast"; 
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

//import { insertOneUser } from "../server/user"; 
 
// Schema validation 
const FormSchema = z.object({ 
  name: z.string({ 
    required_error: "Please enter your name" 
  }) 
  .min(2, { message: "Name must be more than 2 characters long" }) 
  .max(20, { message: "Name must be no longer than 20 characters" }), 
   
  question2: z.string({ required_error: "Please select an option" }), 
  question3: z.string({ required_error: "Please enter your answer" }), 
  question4: z.string({ required_error: "Please select an option" }),
  question5: z.array(z.string()).nonempty({ message: "Please select at least one option" }), // Add question5
}); 

type FormData = z.infer<typeof FormSchema>;
 
export default function Quiz() { 
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema), 
    defaultValues: { 
      name: '', 
      question2: '', 
      question3: '', 
      question4: '',
      question5: [], 
    } 
  }); 
 
  async function onSubmit(data: z.infer<typeof FormSchema>) { 
    setSubmittedData(data);
    setIsDialogOpen(true);
  } 

  function closeDialog() {
    setIsDialogOpen(false);
  }
 
  return ( 
    // <div
    //   className="p-6 max-w-xl mx-auto shadow-md rounded-lg"
    //   style={{
    //     backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cFk_px7G-tT1FP5sSG9l01tvibuHCwPMVw&s')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}>
    <div
        className="p-6 max-w-xl mx-auto shadow-md rounded-lg"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cFk_px7G-tT1FP5sSG9l01tvibuHCwPMVw&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Ensure content is readable
        }}
      >
      <h2 className="text-2xl font-semibold text-center mb-6 text-white">Drug Awareness Quiz</h2> 
      <Form {...form}> 
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> 
          <FormField 
            control={form.control} 
            name="name" 
            render={({ field }) => ( 
              <FormItem> 
                <FormLabel className="text-white">Name</FormLabel> 
                <FormDescription className="text-white">Please enter your name.</FormDescription> 
                <FormControl> 
                  <Input placeholder="Your name here" {...field} className="text-white"/> 
                </FormControl> 
                <FormMessage className="text-white"/> 
              </FormItem> 
            )} 
          /> 
          <FormField 
            control={form.control} 
            name="question2" 
            render={({ field }) => ( 
              <FormItem> 
                <FormLabel className="text-white">Are you familiar with the drug law in SG?</FormLabel> 
                <FormDescription className="text-white">Please choose your answer.</FormDescription> 
                <Select onValueChange={field.onChange} defaultValue={field.value}> 
                  <FormControl> 
                    <SelectTrigger> 
                      <SelectValue placeholder="Select an answer" className="text-white"/> 
                    </SelectTrigger> 
                  </FormControl> 
                  <SelectContent> 
                    <SelectItem value="yes">Yes</SelectItem> 
                    <SelectItem value="no">No</SelectItem> 
                  </SelectContent> 
                </Select> 
                <FormMessage className="text-white"/> 
              </FormItem> 
            )} 
          /> 
          <FormField 
            control={form.control} 
            name="question3" 
            render={({ field }) => ( 
            <FormItem> 
            <FormLabel className="text-white">Do you consume drugs and why?</FormLabel> 
            <FormDescription className="text-white">Please answer.</FormDescription> 
            <FormControl> 
              <Input placeholder="Type your answer here" {...field} className="text-white"/> 
            </FormControl> 
            <FormMessage className="text-white"/> 
            </FormItem> 
            )} 
          /> 
          <FormField 
            control={form.control} 
            name="question4" 
            render={({ field }) => ( 
              <FormItem> 
                <FormLabel className="text-white">Do you need help to quit?</FormLabel> 
                <FormDescription className="text-white">Please select an answer.</FormDescription> 
                <Select onValueChange={field.onChange} defaultValue={field.value}> 
                  <FormControl> 
                    <SelectTrigger> 
                      <SelectValue placeholder="Select an answer" className="text-white"/> 
                    </SelectTrigger> 
                  </FormControl> 
                  <SelectContent> 
                    <SelectItem value="yes">Yes</SelectItem> 
                    <SelectItem value="no">No</SelectItem> 
                  </SelectContent> 
                </Select> 
                <FormMessage className="text-white"/> 
              </FormItem> 
            )} 
          /> 
           <FormField
            control={form.control}
            name="question5"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  What are the consequences when you do drug in SG
                </FormLabel>
                <FormDescription className="text-white">Select one or more options.</FormDescription>
                <div className="space-y-2 text-white" >
                  {[
                    { value: "a", label: "Nothing will happen" },
                    { value: "b", label: "Fine $20,000" },
                    { value: "c", label: "Jail up to 10 years" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox 
                        checked={field.value.includes(option.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, option.value]);
                          } else {
                            field.onChange(field.value.filter((v) => v !== option.value));
                          }
                        }}
                        className="w-5 h-5 border-2 border-white bg-white checked:bg-white checked:border-white focus:ring focus:ring-white"
                      />
                      <label htmlFor={option.value} className="text-white">{option.label}</label>
                    </div>
                  ))}
                </div>
                <FormMessage className="text-white"/>
              </FormItem>
            )}
          />
          <div className="flex justify-center"> 
            <Button type="submit" className="w-full max-w-xs">Submit</Button> 
          </div> 
        </form> 
      </Form> 

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-lg font-semibold mb-4">Your Answers</h3>
            {submittedData && (
            <div className="mt-6 p-4 bg-blue-100 rounded-md">
              <p>Hi {submittedData.name},</p> <br></br>
              <p>
                The correct answer for question 5 is 
                <strong> Fine $20,000 and Jail up to 10 years</strong>
              </p><br></br>
              <p>
                <Link href="/resources" className="text-blue-500 underline">
                  Learn more
                </Link>
              </p>
            </div>
          )}

            <div className="flex justify-end mt-4">
              <Button onClick={closeDialog}>Close</Button>
            </div>
          </div>
        </div>
      )}

    </div> 
  ); 
}