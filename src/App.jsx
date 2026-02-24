import React from 'react';
import { Send, Upload, Settings, Bell } from 'lucide-react';

// Components
import { Button } from './components/Button/Button';
import { Avatar } from './components/Avatar/Avatar';
import { Badge } from './components/Badge/Badge';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card/Card';
import { Alert } from './components/Alert/Alert';
import { Input } from './components/Input/Input';

function App() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '1200px' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>EdTech Design System</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)' }}>
          A comprehensive component gallery for Claude-to-Figma testing. Built with semantic React & CSS.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.figma.com/design/Y3MYmfsUmGzDJA439rE6tV/code-to-figma-test?node-id=0-3&t=YJr9Y61OwssrK9Na-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#0acf83', // Figma green
              color: 'var(--color-bg-surface)',
              fontWeight: 'var(--font-weight-semibold)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Settings size={18} /> View Figma Design
          </a>
        </div>
      </header>

      <div style={{ display: 'grid', gap: '4rem' }}>

        {/* Foundation: Colors & Typography */}
        <section>
          <h2>1. Typography & Tokens</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3>Headings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h1 style={{ margin: 0 }}>Heading 1 (32px)</h1>
                <h2 style={{ margin: 0 }}>Heading 2 (24px)</h2>
                <h3 style={{ margin: 0 }}>Heading 3 (20px)</h3>
                <h4 style={{ margin: 0 }}>Heading 4 (18px)</h4>
              </div>
            </div>
            <div>
              <h3>Body Text</h3>
              <p>Primary large body text used for important introductory content.</p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Secondary smaller body text used for metadata or supplementary information.</p>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>Tertiary tiny text for timestamps or fine print.</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2>2. Buttons</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Variants (Default Size)</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger">Danger Action</Button>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem' }}>States (Disabled)</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary" disabled>Primary Disabled</Button>
                <Button variant="secondary" disabled>Secondary Disabled</Button>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem' }}>With Icons</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary" icon={Send}>Send Message</Button>
                <Button variant="secondary" icon={Upload}>Upload File</Button>
                <Button variant="ghost" icon={Settings}>Settings</Button>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem' }}>Sizes</h4>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button size="sm">Small (32px)</Button>
                <Button size="md">Medium (40px)</Button>
                <Button size="lg">Large (48px)</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avatars & Badges */}
        <section>
          <h2>3. Avatars & Badges</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Avatars</h4>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" status="online" />
                <Avatar size="md" initials="TR" status="away" />
                <Avatar size="lg" status="offline" />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem' }}>Role/Status Badges</h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Badge variant="default">Staff</Badge>
                <Badge variant="primary">Teacher</Badge>
                <Badge variant="success">Verified</Badge>
                <Badge variant="warning">Pending Parent</Badge>
                <Badge variant="danger">Action Required</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Forms & Inputs */}
        <section>
          <h2>4. Forms & Inputs</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />

          <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Input
              label="Student First Name"
              placeholder="e.g. Jane"
              helpText="Enter the legal first name of the student."
            />
            <Input
              label="Parent Email Address"
              type="email"
              placeholder="parent@example.com"
              defaultValue="invalid-email"
              error="Please enter a valid email address."
            />
            <Input
              label="Student ID (System Generated)"
              value="STU-9842"
              disabled
            />
          </div>
        </section>

        {/* Alerts & Notifications */}
        <section>
          <h2>5. Alerts & Notifications</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
            <Alert variant="info" title="New Message Delivery Rule">
              <p>Messages scheduled after 8 PM will be delivered the following morning to respect quiet hours.</p>
            </Alert>
            <Alert variant="success" title="Announcement Posted">
              <p>Your weekly newsletter has been successfully published to all 4th Grade parents.</p>
            </Alert>
            <Alert variant="warning" title="Missing Attendance">
              <p>Homeroom attendance for today has not been submitted yet.</p>
            </Alert>
            <Alert variant="danger" title="Weather Emergency Alert">
              <p>School is delayed 2 hours due to severe weather conditions. Ensure you have acknowledged the safety protocol.</p>
            </Alert>
          </div>
        </section>

        {/* Complex Layouts: Cards */}
        <section>
          <h2>6. Data Display (Cards / Feed)</h2>
          <hr style={{ margin: '1rem 0 2rem', borderColor: 'var(--color-border-subtle)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

            {/* Announcement Card */}
            <Card>
              <CardHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Avatar initials="JD" size="md" status="online" />
                  <div>
                    <h4 style={{ margin: 0 }}>John Doe <Badge variant="primary" className="ml-2" style={{ marginLeft: '8px' }}>Principal</Badge></h4>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Today at 9:00 AM • To: All Staff</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" icon={Bell} />
              </CardHeader>
              <CardBody>
                <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Updated Fall Schedule</h3>
                <p>Hello everyone. Please be advised that the fall assembly schedule has been updated. Refer to the attached document for the exact timings for your respective grades.</p>
                <p>Ensure you review this before tomorrow's morning meeting.</p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm">Acknowledge Receipt</Button>
                <Button variant="ghost" size="sm">Reply Privately</Button>
              </CardFooter>
            </Card>

            {/* Simple info card */}
            <Card padding="large">
              <CardBody>
                <div style={{ textAlign: 'center' }}>
                  <Bell size={48} color="var(--color-primary-light)" style={{ marginBottom: '1rem' }} />
                  <h3>No new notifications</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>You're all caught up! Check back later for updates from teachers or administrators.</p>
                  <Button variant="secondary" style={{ marginTop: '1rem' }}>Refresh Feed</Button>
                </div>
              </CardBody>
            </Card>

          </div>
        </section>
      </div>

    </div >
  );
}

export default App;
