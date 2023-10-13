type CodeKey =
    | "helloWorld"
    | "simpleDialog"
    | "simpleNavBar"
    | "brightSunnyDay";

export default function LandingPageChallengeCode(codeKey: CodeKey): string {
    type FunctionType = () => string;
    const landingPageCodeMap: Map<CodeKey, FunctionType> = new Map([
        ["helloWorld", ButtonHelloWorld],
        ["simpleDialog", SimpleDialog],
        ["simpleNavBar", SimpleNavBar],
        ["brightSunnyDay", BrightSunnyDay],
    ]);
    const func = landingPageCodeMap.get(codeKey)!;
    return func();
}

function ButtonHelloWorld(): string {
    return `<button class="bg-blue-500 text-white rounded-full p-2">
            Hello World
        </button>`;
}

function SimpleDialog(): string {
    return `<div class="flex items-center justify-center h-screen">
    <div class="bg-black text-white rounded-lg shadow-md w-96 p-6">
      <h2 class="text-xl font-semibold mb-4">Dialog</h2>
      <p class="text-white mb-4">For this exercise, do not implement any event
        listeners and such.</p>
    </div>
  </div>`;
}

function SimpleNavBar(): string {
    return `<nav class="bg-white shadow p-4">
    <div class="container mx-auto">
      <ul class="flex space-x-6">
        <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">[Hint: All text
            are gray-700 and blue-600 on hover, including this one]</a></li>
      </ul>
    </div>
  </nav>`;
}

function BrightSunnyDay(): string {
    return `<div class="min-h-screen flex items-center justify-center bg-blue-300">
    <div class="bg-yellow-300 w-32 h-32 rounded-full flex items-center justify-center">
      <p class="text-center">bright sunny day</p>
    </div>
    </div>
`;
}
