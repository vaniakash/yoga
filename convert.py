import re
import sys

def html_to_jsx(html):
    # Convert class to className
    jsx = re.sub(r'\bclass=', 'className=', html)
    # Convert for to htmlFor
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    # Close img tags
    jsx = re.sub(r'(<img[^>]+)(?<!/)>', r'\1 />', jsx)
    # Close input tags
    jsx = re.sub(r'(<input[^>]+)(?<!/)>', r'\1 />', jsx)
    # Close br and hr
    jsx = re.sub(r'(<br[^>]*)(?<!/)>', r'\1 />', jsx)
    # Close hr
    jsx = re.sub(r'(<hr[^>]*)(?<!/)>', r'\1 />', jsx)
    # Remove HTML comments
    jsx = re.sub(r'<!--[\s\S]*?-->', '', jsx) 
    
    return jsx

def extract_tag(html, tag):
    pattern = f'<{tag}[^>]*>.*?</{tag}>'
    match = re.search(pattern, html, re.IGNORECASE | re.DOTALL)
    if match:
        return match.group(0)
    return ""

def main():
    try:
        with open('/Users/akashrana/Desktop/MCA/yoga/design.html', 'r', encoding='utf-8') as f:
            html = f.read()
    except FileNotFoundError:
        print("Could not find design.html")
        return

    # Extract header
    header_html = extract_tag(html, 'header')
    header_jsx = html_to_jsx(header_html)
    
    # Extract footer
    footer_html = extract_tag(html, 'footer')
    footer_jsx = html_to_jsx(footer_html)
    
    # The rest is the body/main content
    # Find all sections and main
    sections = re.findall(r'<section[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
    sections_jsx = [html_to_jsx(sec) for sec in sections]
    
    # Write Navbar.tsx
    navbar_content = f"""import React from 'react';
import Link from 'next/link';

export function Navbar() {{
  return (
    {header_jsx}
  );
}}
"""
    with open('/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
        f.write(navbar_content)

    # Write Footer.tsx
    footer_content = f"""import React from 'react';
import Link from 'next/link';

export function Footer() {{
  return (
    {footer_jsx}
  );
}}
"""
    with open('/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/components/Footer.tsx', 'w', encoding='utf-8') as f:
        f.write(footer_content)

    # Write page.tsx
    page_content = f"""import React from 'react';

export default function HomePage() {{
  return (
    <div className="flex flex-col min-h-screen">
      {"".join(sections_jsx)}
    </div>
  );
}}
"""
    with open('/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/app/[locale]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page_content)

    print("Successfully converted design.html to JSX and updated components.")

if __name__ == '__main__':
    main()
